import React from "react";

export const Banner = ({ answer, guesses, status }) => {
  switch (status) {
    case "lost":
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      );
    case "won":
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {guesses.length === 1
                ? " one guess"
                : ` ${guesses.length} guesses`}
            </strong>
            .
          </p>
        </div>
      );
    default:
      return null;
  }
};
