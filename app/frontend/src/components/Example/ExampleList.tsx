import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Welche Aufgabe hat ein Product Owner bei der WBD?",
        value: "Welche Aufgabe hat ein Product Owner bei der WBD?"
    },
    { text: "Wofür ist der Stabsbereich 'Urbane Innovation' verantwortlich?", value: "Wofür ist der Stabsbereich Urbane Innovation verantwortlich?" },
    { text: "Welche Fragen kannst du bspw. mit den Daten beantworten?", value: "Welche Fragen kannst du mit den den Daten beantworten? Nenne 10 Beispiele. " }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
