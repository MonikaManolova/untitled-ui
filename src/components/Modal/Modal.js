import styles from "./modal.module.scss";
import { CloseIcon, BuildingIcon, ImageIcon } from "../Icons";
import InputGroup from "../InputGroup/InputGroup";
import Teaxtarea from "../Textarea/Textarea";
import Button from "../Button/Button";

const Modal = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.modal}>
      {/* HEADER - - - - - */}
      <div className={`${styles.header} d-flex justify-c-between`}>
        <div className="d-flex align-i-center">
          <div className={`${styles.buildingIcon} d-flex justify-c-center`}>
            <BuildingIcon />
          </div>
          <div>
            <div className={styles.title}>Add new customer</div>
            <div className={styles.subTitle}>
              Create customer profile by filling up the information.
            </div>
          </div>
        </div>
        <CloseIcon onClick={props.closeModal} className={styles.closeIcon} />
      </div>
      {/* FORM CONTROLS - - - - - */}
      <div className={styles.form}>
        <div className={`${styles.formGroup} d-grid`}>
          <InputGroup placeholder="e.g. Linear" label="Company name*" />
          <InputGroup placeholder="www.example.com" label="Website URL*" />
        </div>
        <div className={`${styles.formGroup} d-flex align-i-center`}>
          {/* <div className={`${styles.imageIcon} d-grid place-i-center`}>
            <ImageIcon />
          </div> */}
          <div className={`${styles.dropImage} d-grid place-i-center`}>
            <p>
              <span className={styles.accentWords}>Click to upload image</span> or
              drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </div>
        <div className={`${styles.formGroup} d-grid`}>
          <InputGroup
            addon="untitledui.com/"
            placeholder="e.g. Linear"
            label="Username*"
          />
          <Teaxtarea
            placeholder="Write a few sentences about the company..."
            label="Description*"
          />
        </div>
      </div>
      <div className={`${styles.buttonsGroup} d-flex justify-c-center`}>
        <Button className="btn-icon-secondary" onClick={props.closeModal}>
          Cancel
        </Button>
        <Button className="btn-icon-primary">Add Customer</Button>
      </div>
    </div>
  </div>
);
export default Modal;
