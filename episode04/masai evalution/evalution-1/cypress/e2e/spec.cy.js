import questions from "../fixtures/apiQuestions.json";
import data from "../../submissionData.json"; // do not create this file
//const data = [{ submission_link: "http://localhost:3000", id: "santhi-local" }];

const apiEndPoint = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`;
//consider above as api url.
describe("React-Online-Exam ", () => {
  let acc_score = 1;

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  data.forEach(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    it(`Heading and button to start the exam should be visible when the component loads`, () => {
      cy.visit(url);
      cy.get(`[data-testid="Booklet"]`).should(`exist`);
      cy.contains(
        "h1",
        `To begin the exam, click on the 'Start Exam' button below`
      ).should("be.visible");
      cy.get("button").should("contain", `Start Exam`);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should make a get request to the endpoint when clicked on Start Exam button and disappear on UI once clicked on it and End Exam button, Score(Score: 0) is visible", () => {
      cy.intercept("GET", `${apiEndPoint}`).as("get-questions");
      cy.visit(url);
      cy.get(`[data-testid="Booklet"]`).should(`exist`);
      cy.get(`.welcome-div button`)
        .should("be.visible")
        .should("contain", `Start Exam`)
        .click({ force: true });
      cy.wait("@get-questions");
      cy.get(`.welcome-div button`).should("not.exist");
      cy.get(`.questions-container button`)
        .eq(0)
        .should("be.visible")
        .should("have.text", "End Exam");
      cy.get("h3").eq(0).should("contain", `Score: 0`);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check all questions are visible along with 4 options", () => {
      cy.intercept("GET", `${apiEndPoint}`).as("get-questions");
      cy.visit(url);
      cy.get(`[data-testid="Booklet"]`).should(`exist`);
      cy.get(`.welcome-div button`)
        .should("be.visible")
        .should("contain", `Start Exam`)
        .click({ force: true });
      cy.wait("@get-questions");

      questions.forEach((ele, ind) => {
        cy.get(`.question-card`)
          .eq(ind)
          .each((element) => {
            cy.wrap(element).find(`h3`).should("contain", ele.question);
            for (let i = 0; i < 4; i++) {
              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .eq(i)
                .should("contain", ele.options[i]);
            }
          });
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check whether able select the answer for any question and the score is getting updated only after selecting the correct answer", () => {
      cy.intercept("GET", `${apiEndPoint}`).as("get-questions");
      cy.visit(url);
      cy.get(`[data-testid="Booklet"]`).should(`exist`);
      cy.get(`.welcome-div button`)
        .should("be.visible")
        .should("contain", `Start Exam`)
        .click({ force: true });
      cy.wait("@get-questions");
      let score = 0;
      cy.get("h3").eq(0).should("contain", `Score: ${score}`);
      questions.forEach((ele, ind) => {
        if (ind % 3 == 0) {
          cy.get(`.question-card`)
            .eq(ind)
            .each((element) => {
              cy.wrap(element).find(`h3`).should("contain", ele.question);
              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .eq(ele.correctOptionIndex)
                .should("contain", ele.options[ele.correctOptionIndex])
                .click({ force: true });
              score++;
              cy.get("h3").eq(0).should("contain", `Score: ${score}`);
            });
        } else {
          cy.get(`.question-card`)
            .eq(ind)
            .each((element) => {
              cy.wrap(element).find(`h3`).should("contain", ele.question);
              let wrongOption;
              if (ele.correctOptionIndex === 0) {
                wrongOption = ele.correctOptionIndex + 1;
              } else {
                wrongOption = ele.correctOptionIndex - 1;
              }
              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .eq(wrongOption)
                .click({ force: true });
              cy.get("h3").eq(0).should("contain", `Score: ${score}`);
            });
        }
      });
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check whether the user able to select only one answer, and all option buttons of that question are getting disabled after selecting it", () => {
      cy.intercept("GET", `${apiEndPoint}`).as("get-questions");
      cy.visit(url);
      cy.get(`.welcome-div button`)
        .should("be.visible")
        .should("contain", `Start Exam`)
        .click({ force: true });
      cy.wait("@get-questions");
      questions.forEach((ele, ind) => {
        if (ind % 3 == 0) {
          cy.get(`.question-card`)
            .eq(ind)
            .each((element) => {
              cy.wrap(element).find(`h3`).should("contain", ele.question);
              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .should("have.length", 4)
                .eq(0)
                .click({ force: true });
              for (let i = 0; i < 4; i++) {
                cy.get(`[data-testid="option"] button`)
                  .eq(i)
                  .should("be.disabled");
              }
            });
        }
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check End Exam button is working as per the problem statement or not", () => {
      cy.intercept("GET", `${apiEndPoint}`).as("get-questions");
      cy.visit(url);
      cy.get(`.welcome-div button`)
        .should("be.visible")
        .should("contain", `Start Exam`)
        .click({ force: true });
      cy.wait("@get-questions");
      questions.forEach((ele, ind) => {
        if (ind % 4 == 0) {
          cy.get(`.question-card`)
            .eq(ind)
            .each((element) => {
              cy.wrap(element).find(`h3`).should("contain", ele.question);
              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .should("have.length", 4)
                .eq(0)
                .click({ force: true });
            });
        }
      });
      cy.get(`.questions-container button`)
        .eq(0)
        .should("be.visible")
        .should("have.text", "End Exam")
        .click({ force: true });
      cy.get(`[data-testid="Booklet"]`).should(`exist`);
      cy.contains(
        "h1",
        `To begin the exam, click on the 'Start Exam' button below`
      ).should("be.visible");
      cy.get("button").should("contain", `Start Exam`);
      cy.get(`.questions-container`).should("not.exist");
      cy.get("button").should("contain", `Start Exam`).click({ force: true });
      cy.get("h3").eq(0).should("contain", `Score: 0`);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("check after selecting options for any question, the correct option is having className as `bgGreen` and the wrong options are having className as `bgRed`", () => {
      cy.intercept("GET", `${apiEndPoint}`).as("get-questions");
      cy.visit(url);
      cy.get(`[data-testid="Booklet"]`).should(`exist`);
      cy.get(`.welcome-div button`)
        .should("be.visible")
        .should("contain", `Start Exam`)
        .click({ force: true });
      cy.wait("@get-questions");
      questions.forEach((ele, ind) => {
        if (ind % 3 == 0) {
          cy.get(`.question-card`)
            .eq(ind)
            .each((element) => {
              cy.wrap(element).find(`h3`).should("contain", ele.question);
              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .eq(ele.correctOptionIndex)
                .should("not.have.class", `bgGreen`);

              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .eq(ele.correctOptionIndex)
                .should("contain", ele.options[ele.correctOptionIndex])
                .click({ force: true });
            });
        } else {
          cy.get(`.question-card`)
            .eq(ind)
            .each((element) => {
              cy.wrap(element).find(`h3`).should("contain", ele.question);
              let wrongOption;
              if (ele.correctOptionIndex === 0) {
                wrongOption = ele.correctOptionIndex + 1;
              } else {
                wrongOption = ele.correctOptionIndex - 1;
              }
              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .eq(wrongOption)
                .should("not.have.class", "bgRed");
              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .eq(wrongOption)
                .click({ force: true });
            });
        }
      });
      questions.forEach((ele, ind) => {
        cy.get(`.question-card`)
          .eq(ind)
          .each((element) => {
            for (let i = 0; i < 4; i++) {
              cy.wrap(element)
                .find(`[data-testid="option"] button`)
                .eq(i)
                .should(
                  "have.class",                  
                  ele.correctOptionIndex === i
                    ? `bgGreen`
                    : `bgRed`
                );
            }
          });
      });
      cy.then(() => {
        acc_score += 3;
      });
    });

    it(`There should be a show ans button on clicking it the ans should be visible for that question`, () => {
      cy.intercept("GET", `${apiEndPoint}`).as("get-questions");
      cy.visit(url);
      cy.get(`.welcome-div button`)
        .should("be.visible")
        .should("contain", `Start Exam`)
        .click({ force: true });
      cy.wait("@get-questions");
      cy.get(".show-ans button").should("have.length", questions.length);
      cy.get(".show-ans p").should("not.exist");
      cy.get(".show-ans button").first().click({ force: true });
      cy.get(".show-ans button").last().click({ force: true });
      cy.get(".show-ans p")
        .first()
        .should("be.visible")
        .should(
          "contain",
          questions[0].options[questions[0].correctOptionIndex]
        );
      cy.get(".show-ans p")
        .last()
        .should("be.visible")
        .should(
          "contain",
          questions[questions.length - 1].options[
            questions[0].correctOptionIndex
          ]
        );
      cy.get(".show-ans button").first().should("contain","Hide Ans").click({ force: true }).should("contain","Show Ans");
      cy.get(".show-ans p").should("have.length",1);
      cy.get(".show-ans button").last().should("contain","Hide Ans").click({ force: true }).should("contain","Show Ans");
      cy.get(".show-ans p").should("not.exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
