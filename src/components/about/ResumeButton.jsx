import { FiDownload } from "react-icons/fi";
import Button from "../ui/Button";

function ResumeButton() {
  return (
    <div className="mt-8 flex justify-center">
      <Button as="a" href="/resume.pdf" download>
        <FiDownload size={18} aria-hidden="true" className="mr-2" />
        Download Resume
      </Button>
    </div>
  );
}

export default ResumeButton;
