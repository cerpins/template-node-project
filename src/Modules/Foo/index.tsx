import { useState, useEffect } from "react";
import { FooBar } from "../../Models";
import style from "./index.module.sass";

export interface FooProps {
  statusMessage: string;
}
export function Foo(props: FooProps) {
  const [about, setAbout] = useState<FooBar | null>(null);

  useEffect(() => {
    console.log("Running the fetch.");
    fetch("/api/foo")
      .then((res: Response) => res.json())
      .then((res: FooBar) => setAbout(res))
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <div className={style.root}>
      {props.statusMessage}: {about ? about.foo : "loading..."}
    </div>
  );
}
