import styles from "./cta.module.css"
import Button from "../button/Button"

interface CtaProps {
    text: string;
    buttonOneText: string;
    buttonTwoText: string;
    buttonOneLink: string;
    buttonTwoLink: string;
    buttonOneTarget: string;
    buttonTwoTarget: string;
}

export default function Cta({ text, buttonOneText, buttonTwoText, buttonOneLink, buttonTwoLink, buttonOneTarget, buttonTwoTarget }: CtaProps) {
    return <div className={styles.Cta}>
                <h1>{text}</h1>
                <div className={styles.CtaButtons}>
                    <Button text={buttonOneText} arrowWhite={false} link={buttonOneLink} target={buttonOneTarget}/>
                    <Button text={buttonTwoText} arrowWhite={false} link={buttonTwoLink} target={buttonTwoTarget}/>
                </div>
            </div>
}