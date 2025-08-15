export default function NavButton({ route, content }) {
  return (
    <div className="nav-button">
      <Link to={route}>{content}</Link>
    </div>
  );
}
