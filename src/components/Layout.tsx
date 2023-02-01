import NavBarMovie from "./NavBarMovie";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBarMovie />
      <div>{children}</div>
    </>
  );
}