import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog"

type ConfirmAlertProps = {
  title: string;
  message: string;
  open: boolean;
  setOpen: () => void;
  onContinue: () => void;
  onCancel: () => void;
}
export default function ConfirmAlert({ title, message, open, setOpen, onContinue, onCancel }: ConfirmAlertProps) {
  console.log('ConfirmAlert')
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-[#59302C] border border-[#BF4209]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row justify-end gap-2">
          <AlertDialogCancel
            onClick={()=>onCancel()}
            className="bg-gray-600 text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={()=>onContinue()}
            className="bg-white text-black"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}