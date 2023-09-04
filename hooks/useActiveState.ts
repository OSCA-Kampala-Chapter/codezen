import { useRouter } from 'next/router';

type Props = {
  exact: boolean;
  href: string;
};
export function useActiveState(props: Props) {
  const { pathname } = useRouter();
  const activeState = props.exact
    ? pathname === props.href
    : pathname.startsWith(props.href);
  return activeState;
}
