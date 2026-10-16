import type { CSSProperties } from "react";
import { gradeTheme, grades, type Grade } from "../../../../data/popIntro";
import "./GradeSwitch.css";

type GradeSwitchProps = {
  grade: Grade;
  onChange: (grade: Grade) => void;
};

export function GradeSwitch({ grade, onChange }: GradeSwitchProps) {
  return (
    <div className="gr-container gr-pop-grade-switch" role="group" aria-label="学年">
      {grades.map((g) => {
        const selected = g === grade;
        const style = { "--gr-pop-grade-color": gradeTheme[g].color } as CSSProperties;
        return (
          <button
            key={g}
            type="button"
            className={`gr-pop-grade-badge${selected ? " gr-pop-grade-badge--selected" : ""}`}
            style={style}
            aria-pressed={selected}
            onClick={() => onChange(g)}
          >
            <span className="gr-pop-grade-badge__label">
              <span>{g}向け</span>
              <span className="gr-pop-grade-badge__arrow" aria-hidden="true" />
            </span>
          </button>
        );
      })}
    </div>
  );
}
