import { NavGroup } from '@/lib/types';
import Dropdown from './Dropdown';
import DropdownAnchor from './DropdownAnchor';
import Badge from './Badge';
import DropdownDivider from './DropdownDivider';
import DropdownHeader from './DropdownHeader';

function PageHeaderNavItemDropdown(props: { items: NavGroup['items'] }) {
  const { items } = props;

  return (
    <Dropdown>
      {items.map((item, idx) => {
        const { type, text, isExternal } = item;
        const key = `${type}-${idx}`;

        if (type === 'divider') {
          return <DropdownDivider key={key} />;
        }

        if (type === 'header') {
          return <DropdownHeader key={key}>{text}</DropdownHeader>;
        }

        return (
          <DropdownAnchor
            key={text}
            href={item.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            <div className="flex-1 text-nowrap">{text}</div>
            {item.isNew && (
              <>
                {' '}
                <Badge>NEW</Badge>
              </>
            )}
          </DropdownAnchor>
        );
      })}
    </Dropdown>
  );
}

export default PageHeaderNavItemDropdown;
