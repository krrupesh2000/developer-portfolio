import { Download } from "lucide-react";
import Button from "../ui/Button";

function ResumeButton() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button as="a" href="/resume.pdf" download>
        <Download size={18} aria-hidden="true" className="mr-2" />
        Download Resume
      </Button>
    </div>
  );
}

export default ResumeButton;
