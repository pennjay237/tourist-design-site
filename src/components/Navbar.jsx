import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navabar">
      <div className="options">
        <div className="pic">
          <img
            src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kSucIDsCJ4YRwWgVpTDmWihHBBih6D-PEKWVyyCkezgGGHoLoDpD7fjgePAMnNtDsSeuTdHCgxt5F~3po6wOfglP~6oiHUxd-9WSdID~8xyaEbtsY96Lj3B0UTx8Q3kpDI40e3UGeDdn7pskddHJcNnUnSmQ7QYdjuDyaqWQrVLlA7ArUCVAWyprCJ4nuW3wfgjC0XxqcmNgWUPpLELbtwr1PHJD4xLi2ae5hto0rDOWhyDxrN73CLuLcGGiK0E6VyxLBBm9qbFLuCXUlzCa62prEucle5t52rbwa4SpQgvkHxd4CAB0qgFk9XzR5b99DWBF9lI0j-TX1ZapxLaW9A__"
            alt="logo"
          />
        </div>
        <div className="nav">
          <nav>
            <a onClick={() => navigate('/')}>Home</a>
            <a onClick={() => navigate('/about_us')}>About</a>
            <a onClick={() => navigate('/package')}>Tour package</a>
            <a onClick={() => navigate('/gallery')}>Gallery</a>
            <a href='#'>Blog</a>
            <a onClick={() => navigate('/contact_us')}>Contact Us</a>
          </nav>
        </div>
      </div>
      <div className="sign">
        <button className="sign-in">Sign In</button>
      </div>
    </div>
  );
}