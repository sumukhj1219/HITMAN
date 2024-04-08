import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Sword, LockKeyhole, PenTool  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const options = [
  {
    icon: <Sword fill='true' />,
    href: ' https://sumukhj1219.github.io/ball-shooter/',
    label: 'Ball Shooter',
  },
  {
    icon: <LockKeyhole />,
    href: ' https://sumukhj1219.github.io/password-generator/',
    label: 'Strong PassKey',
  },
  {
    icon: <PenTool  />,
    href: ' https://sumukhj1219.github.io/ESignature/',
    label: 'ESignature (PC Only)',
  },
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option.href) {
      window.open(option.href, '_blank');
    } else {
      navigate(option.route);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '30ch',
          },
        }}
      >
			<span className='flex flex-col mx-7 bg-blue-300 p-4 rounded-lg my-2 font-extrabold'>MY PROJECTS</span>
        {options.map((option) => (
		  <div>
			 <MenuItem key={option.label} selected={option.label === 'Ball-Shooter'} onClick={() => handleClose(option)}>
            <div className='flex flex-row font-bold text-gray-800'>
              <span className='bg-slate-100 p-2 rounded-lg hover:bg-slate-400'>
			  {option.icon}
			  </span>
              <span className='ml-2'></span>
			  <span className='mt-2'>
			  {option.label}
			  </span>
              
            </div>
          </MenuItem>
		  </div>
         
        ))}
      </Menu>
    </div>
  );
}
