import * as textConst from "../../const/text";

export default function Quote() {
  return (
    <blockquote>
      <p id="quote">{textConst.ABOUT_MY_QUOTE}</p>
    </blockquote>
  );
}
