import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-form";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewAgentDialog = ({ open, onOpenChange }: NewAgentDialogProps) => {
  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Create a new agent"
      description="Create a new agent to start chatting with."
    >
      <AgentForm onSuccess={() => onOpenChange(false)} onCancel={() => onOpenChange(false)} />
    </ResponsiveDialog>
  );
};
