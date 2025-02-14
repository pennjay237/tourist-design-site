import PropTypes from "prop-types";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function HeroCommon({ title }) {
    return (
        <div className='hero-banner'>
      <div className='hero-text'>
        <h1>{title}</h1>
        <div className="d-flex align-items-center justify-content-space-around g-4 mx-3">
          <a href="/">Home</a>
          <ArrowRightIcon sx={{fontSize: 20, color: '#c7923e'}}/>
          <span>{title}</span>
        </div></div>
    </div>
    )
}

HeroCommon.propTypes = {
    title: PropTypes.string,
  };