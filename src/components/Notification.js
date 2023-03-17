import { Notyf } from "notyf";
import "notyf/notyf.min.css";

let toast = new Notyf({
  duration: 3000,
  position: {
    x: "center",
    y: "top",
  },
  types: [
    {
      type: "warning",
      background: "linear-gradient(45deg, rgb(239, 253, 33), rgb(255, 0, 0))",
      icon: {
        className: "material-icons",
        tagName: "span",
        text: "error",
      },
    },
  ],
});

export default toast;
