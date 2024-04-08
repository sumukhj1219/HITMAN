import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { SiCodingninjas, SiLeetcode } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const list = [
  {
    icon: <SiCodingninjas />,
    label: "CodingNinjas",
    href: "https://www.naukri.com/code360/profile/SUMUKHJ1219"
  },
  {
    icon: <SiLeetcode />,
    label: "LeetCode",
    href: "https://leetcode.com/sumukhjoshi75/"
  },
  {
    icon: <BsLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumukh-joshi-262515292/"
  },
  {
    icon: <AiOutlineGithub />,
    label: "GitHub",
    href: "https://github.com/sumukhj1219"
  },
];

export default function MenuPopupState() {
  const navigate = useNavigate();

  const handleClose = (item) => {
    if (item.href) {
		window.open(item.href, '_blank');
	  } else {
		navigate(item.route);
	  }
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            About Me
          </Button>
          <Menu {...bindMenu(popupState)}>
            {list.map((item) => (
              <MenuItem key={item.href} onClick={() => handleClose(item)}>
                <div className='flex flex-row'>
                  <div className='bg-slate-100 hover:bg-slate-300 rounded-lg p-2'>
                    {item.icon}
                  </div>
                  <span className='mr-2'></span>
                  <div className='mt-1 font-bold'>
                    {item.label}
                  </div>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
