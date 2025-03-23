import { NAV_GROUP_ITEMS } from '@/lib/content';
import PageHeaderNavItem from './PageHeaderNavItem';

function PageHeaderNav() {
  return (
    <nav className="hidden gap-[30px] px-[30px] lg:flex lg:flex-1">
      {NAV_GROUP_ITEMS.map((group) => (
        <PageHeaderNavItem {...group} key={group.title} />
      ))}
    </nav>
  );
}

export default PageHeaderNav;
