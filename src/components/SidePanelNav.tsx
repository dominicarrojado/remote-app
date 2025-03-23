import { NAV_GROUP_ITEMS, NAV_GROUP_ITEMS_LENGTH } from '@/lib/content';
import { cn } from '@/lib/utils';
import SidePanelNavHeader from './SidePanelNavHeader';
import SidePanelNavAnchor from './SidePanelNavAnchor';
import Badge from './Badge';

function SidePanelNav() {
  return (
    <nav className="z-10 h-full overflow-y-auto bg-white">
      {NAV_GROUP_ITEMS.map((group, idx) => {
        const isLastGroup = idx === NAV_GROUP_ITEMS_LENGTH - 1;

        return (
          <div
            key={group.title}
            className={cn({ 'bg-[#F2F2F2]': isLastGroup })}
          >
            <SidePanelNavHeader>{group.title}</SidePanelNavHeader>
            {group.items
              .filter((item) => !!item.text)
              .map((item) => (
                <SidePanelNavAnchor key={item.text}>
                  {item.icon && <item.icon width={16} height={16} />}
                  <div>{item.text}</div>
                  {item.isNew && <Badge>New</Badge>}
                </SidePanelNavAnchor>
              ))}
          </div>
        );
      })}
    </nav>
  );
}

export default SidePanelNav;
