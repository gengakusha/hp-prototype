import { useState } from "react";
import type { Subject } from "../../../data/subjectTheme";
import "./SubjectButtons.css";

export function SubjectButtons({ subjects }: { subjects: Subject[] }) {
  const [openSubject, setOpenSubject] = useState<Subject | null>(null);

  return (
    <section className="gr-subject-buttons" aria-label="科目">
      <div className="gr-container">
        <ul className="subject-list">
          {subjects.map((subject) => {
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
