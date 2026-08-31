import { useTitle } from "../lib/useTitle";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa"
import Tape from "../components/Tape";
import Sticker from "../components/Sticker";
import { asset } from "../lib/asset";

const ACCESS_KEY = "84ee9352-8f19-4ce3-bfb6-98fda988e82e";

export default function Contact() {
    useTitle("Contact")
    const [status, setStatus] = useState("idle");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        const data = new FormData(e.currentTarget);
        data.append("access_key", ACCESS_KEY);
        data.append("subject", `Letter from ${data.get("name")}: ${data.get("re")}`);
        try {
            const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
            const json = await res.json();
            if (json.success) { setStatus("sent"); e.target.reset(); }
            else setStatus("error");
        } catch {
            setStatus("error");
        }
    }
    return (
        <div className="contact-spread">
            <ul className="links">
                <li><a href="https://github.com/londonho" target="_blank"><FaGithub aria-hidden /> github</a></li>
                <li><a href="https://linkedin.com/in/london-ho" target="_blank"><FaLinkedin aria-hidden /> linkedin</a></li>
                <li><a href="mailto:londonho@icloud.com"><FaEnvelope aria-hidden /> email</a></li>
                <li><a href={asset("london-ho-resume.pdf")} download><FaFilePdf aria-hidden />résumé</a></li>
            </ul>
            <Sticker src={asset("stickers/smiskilaptop.png")} size={300} rotate={-10} top={-10} right={20} />
            <form className="letter" onSubmit={handleSubmit}>
                <Tape color="pink" rotate={-3} style={{ top: -12, left: "42%" }} />
                <p className="salutation">Send me an e-mail!</p>
                <label className="letter-line">
                    <span>Subject</span>
                    <input name="re" required />
                </label>
                <textarea name="message" rows={7} required aria-label="Your letter" />
                <p className="salutation signoff">From</p>
                <label className="letter-line">
                    <span>Name</span>
                    <input name="name" required />
                </label>
                <label className="letter-line">
                    <span>Email</span>
                    <input name="email" type="email" required />
                </label>
                <input type="checkbox" name="botcheck" tabIndex={-1} style={{ display: "none" }} />
                <button className="stamp" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "sealing…" : "send it"}
                    <Sticker src={asset("stickers/stamp.png")} size={350} rotate={80} top={-220} right={-670} />
                 </button>
                <p className="form-status" role="status" aria-live="polite">
                    {status === "sent"  && "Sent. I'll write back soon."}
                    {status === "error" && "That didn't go through — email me directly instead."}
                </p>
            </form>
        </div>
    );
}