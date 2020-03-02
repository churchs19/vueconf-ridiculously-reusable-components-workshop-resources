import AppModal from "@/components/AppModal";

const ConfirmationModalJsx = ({ props, listeners }) => (
  <AppModal onClose={listeners.close}>
    <h3 class="confirmation-message">{props.message}</h3>
    <div class="buttons">
      <AppButton onClick={listeners.confirm}>Confirm</AppButton>
      <AppButton type="secondary" onClick={listeners.close}>
        Cancel
      </AppButton>
    </div>
  </AppModal>
);

export default ConfirmationModalJsx;