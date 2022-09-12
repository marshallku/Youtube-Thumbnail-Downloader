import crtElt from "crtelt";
import { useId } from "../store";
import { getIdFromUri } from "../utils/youtube";

export default function Form() {
    const { setId } = useId;

    return crtElt(
        "form",
        {
            className: "form",
            events: {
                submit(event) {
                    event.preventDefault();
                    const { target } = event;

                    if (!(target instanceof HTMLFormElement)) {
                        return;
                    }

                    const uri = new FormData(target).get("uri");

                    if (!uri) {
                        return;
                    }
                    console.log(uri);
                    setId(getIdFromUri(uri.toString()));
                },
            },
        },
        crtElt("input", {
            type: "text",
            className: "form__input",
            name: "uri",
            placeholder: "URI of Youtube video",
        }),
        crtElt(
            "button",
            { type: "submit", className: "form__submit" },
            "Export"
        )
    );
}
