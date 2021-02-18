import { useState } from "react";
import { useRecoilState } from "recoil";
import { configAtom } from "../atoms";

export function SprintConfigForm({ onSave, defaults }) {
  const [config, setConfig] = useRecoilState(configAtom);
  const [form, setForm] = useState({ ...config });

  return (
    <div style={{ maxWidth: "600px" }}>
      {Object.entries(form).map((v, i) => (
        <div key={v[0] + i}>
          <label htmlFor={v[0]}>{v[0]}</label>
          <input
            value={v[1]}
            id={v[0]}
            onChange={(e) =>
              setForm((form) => {
                return { ...form, [v[0]]: Number(e.target.value) };
              })
            }
          ></input>
        </div>
      ))}

      <br />
      <button className="bg-success" onClick={() => setConfig(form)}>
        Save<span className="icon">&#10003;</span>
      </button>
    </div>
  );
}
