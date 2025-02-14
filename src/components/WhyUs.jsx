import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

export default function WhyUs() {
    return (
        <section className="why-us">
            <div className="why-us-card">
                <DirectionsCarFilledOutlinedIcon sx={{ fontSize: 50 }}/>
                <p>100+ tours around Rwanda</p>
            </div>
            <div className="why-us-card">
                <CheckCircleOutlineOutlinedIcon  sx={{ fontSize: 50 }}/>
                <p>100% Trusted travel agency</p>
            </div>
            <div className="why-us-card">
                <AssignmentIndOutlinedIcon  sx={{ fontSize: 50 }}/>
                <p>10 years of travel experience</p>
            </div>
            <div className="why-us-card">
                <ThumbUpAltOutlinedIcon  sx={{ fontSize: 50 }}/>
                <p>90% of travelors are happy</p>
            </div>
        </section>
    )
}