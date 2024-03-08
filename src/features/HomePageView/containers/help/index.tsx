import { FC } from 'react';
import styles from './help.module.scss';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import ContainerL from '../../../../components/Container/Container';

const HelpSection: FC = () => {
  return (
    <section>
      <ContainerL>
        <div className={styles.help}>
          <div className={styles.helpCard}>
            <h3 className={styles.helpCard_title}>Є запитання?</h3>
            <p className={styles.helpCard_desc}>Ймовірно, що відповідь на ваше запитання уже є в FAQ.</p>
            <CustomButton className={styles.helpCard_btn} onClick={() => {}}>
              Перейти до FAQ
            </CustomButton>
          </div>
          <div className={styles.helpCard}>
            <h3 className={styles.helpCard_title}>Не знайшли відповідь?</h3>
            <p className={styles.helpCard_desc}>Наша технічна підтримка має відповіді на решту запитань.</p>
            <CustomButton className={styles.helpCard_btn} onClick={() => {}}>
              Задати питання
            </CustomButton>
          </div>
          <div className={styles.helpCard}>
            <h3 className={styles.helpCard_title}>Не маєте запитань?</h3>
            <p className={styles.helpCard_desc}>Подайте заявку на отримання довідки прямо зараз!</p>
            <CustomButton className={styles.helpCard_btn} onClick={() => {}}>
              Подати заявку
            </CustomButton>
          </div>
        </div>
      </ContainerL>
    </section>
  );
};

export default HelpSection;
