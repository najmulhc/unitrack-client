import { IconProps } from "../../types";

const SettingsIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 25"
      width={props.width}
      height={props.height}
      className={props.className}
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.30562 1.23077L8.44099 3.36539L5.46508 4.98077L3.0924 4.63461C2.69733 4.58332 2.29523 4.64554 1.93719 4.81332C1.57917 4.98111 1.28136 5.24689 1.08166 5.57693L0.277358 6.92307C0.0712592 7.25836 -0.023697 7.64554 0.00502124 8.0335C0.0337394 8.42146 0.184784 8.79198 0.438218 9.09616L1.94628 10.8846V14.1154L0.478432 15.9038C0.224998 16.208 0.0739554 16.5785 0.0452372 16.9665C0.0165172 17.3545 0.111473 17.7416 0.317572 18.077L1.12187 19.423C1.32158 19.753 1.61939 20.0189 1.97741 20.1866C2.33543 20.3545 2.73753 20.4166 3.13261 20.3654L5.5053 20.0193L8.44099 21.6346L9.30562 23.7693C9.45142 24.1307 9.70796 24.4416 10.0416 24.6611C10.3753 24.8807 10.7706 24.9989 11.1756 25H12.8646C13.2697 24.9989 13.6649 24.8807 13.9986 24.6611C14.3323 24.4416 14.5888 24.1307 14.7346 23.7693L15.5992 21.6346L18.5349 20.0193L20.9077 20.3654C21.3028 20.4166 21.7048 20.3545 22.0629 20.1866C22.4208 20.0189 22.7186 19.753 22.9184 19.423L23.7227 18.077C23.9287 17.7416 24.0237 17.3545 23.995 16.9665C23.9662 16.5785 23.8152 16.208 23.5618 15.9038L22.0537 14.1154V10.8846L23.5217 9.09616C23.775 8.79198 23.9261 8.42146 23.9548 8.0335C23.9836 7.64554 23.8885 7.25836 23.6824 6.92307L22.8781 5.57693C22.6785 5.24689 22.3807 4.98111 22.0225 4.81332C21.6646 4.64554 21.2624 4.58332 20.8674 4.63461L18.4948 4.98077L15.559 3.36539L14.6944 1.23077C14.5486 0.869354 14.292 0.558482 13.9584 0.33887C13.6247 0.119258 13.2295 0.00114434 12.8244 0H11.1756C10.7706 0.00114434 10.3753 0.119258 10.0416 0.33887C9.70796 0.558482 9.45142 0.869354 9.30562 1.23077ZM12 16.5179C14.3202 16.5179 16.201 14.719 16.201 12.5C16.201 10.281 14.3202 8.48214 12 8.48214C9.67986 8.48214 7.799 10.281 7.799 12.5C7.799 14.719 9.67986 16.5179 12 16.5179Z"
      />
    </svg>
  );
};

export default SettingsIcon;