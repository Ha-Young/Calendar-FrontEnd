import moment from 'moment';

describe('login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('date tag should be changed when click button', () => {
    const currentDate = moment().format('DD');
    const previousDate = moment().add(-1, 'days').format('DD');

    cy.get('h3').should('have.text', `${currentDate}일`);

    const goPrevDateButton = cy.get('.sc-eCApGN > :nth-child(1) > button');
    goPrevDateButton.click();
    cy.get('h3').should('have.text', `${previousDate}일`);

    const goNextDateButton = cy.get(':nth-child(3) > button');
    goNextDateButton.click();
    cy.get('h3').should('have.text', `${currentDate}일`);
  });

  it('change daily and weekly calendar', () => {
    const VIEW_WEEKLY = '주간 보기';
    const VIEW_DAILY = '일별 보기';

    cy.get('section').get('h3').should('have.length', 1);

    const switchToWeeklyButton = cy.contains(VIEW_WEEKLY);
    switchToWeeklyButton.click();

    cy.get('section').get('h3').should('have.length', 7);

    const switchToDailyButton = cy.contains(VIEW_DAILY);
    switchToDailyButton.click();

    cy.get('section').get('h3').should('have.length', 1);
  });

  it('show create event page', () => {
    const createEventPageButton = cy.get('nav > .sc-bdnylx > button');
    createEventPageButton.click();

    cy.get('input[name=title]').attribute('name').should('contain', 'title');
  });
});
