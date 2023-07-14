import { styled, Switch, } from "@mui/material";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  width: 70,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#9f9f9f',
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
    border:'1px solid #010E28',
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    color:'#3FF300',
    transform: 'translateX(30px)',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#DCDCDC',
  },
}));
export default CustomSwitch;
