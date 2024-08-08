import { render } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../component/NumberOfEvents';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let AppComponent;
  let NumberOfEventsComponent;
  let AppDOM;

  test('Show default number of events when user hasn’t specified a number', ({ given, and, when, then }) => {
    given('the event app is displayed', () => {
      AppComponent = render(<App />);
    });

    and('the user has not specified the number of events to display', () => {});

    when('the user opens the event list', () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} />, { container: EventListDOM });
      expect(NumberOfEventsComponent).toBeTruthy();
    });

    then('("32") events should be displayed by default', () => {
      expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('32');
    });
  });

  test('User can change the number of events displayed', ({ given, and, when, then }) => {
    given('the event app is displayed', () => {
      AppComponent = render(<App />).container.firstChild;
    });

    and('the user has specified the number of events to display as "10"', async () => {
      const EventListDOM = AppComponent.querySelector('#event-list');
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />, { container: EventListDOM });
      const user = userEvent.setup();
      const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');
      await user.type(numberOfEvents, '{backspace}{backspace}10');
    });

    when('the user changes the number of events to display to "10"', async () => {
      const user = userEvent.setup();
      const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');
      await user.type(numberOfEvents, '{backspace}{backspace}10');
    });

    then('the event list should display "10" events', async () => {
      expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('10');
    });
  });
});
