import { useState } from "react";
import { popSubjects } from "../../../data/popSubjects";
import "./SubjectButtons.css";

export function SubjectButtons() {
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  return (
    <section className="gr-subject-buttons" aria-label="科目">
      <div className="gr-container">
        <ul className="subject-list">
          {popSubjects.map((subject) => {
            const expanded = openSubject === subject;
            return (
              <li key={subject}>
                <button
                  type="button"
                  className="subject-btn"
                  aria-expanded={expanded}
                  onClick={() => setOpenSubject(expanded ? null : subject)}
                >
                  {subject}
                  <span className="subject-btn__icon" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
