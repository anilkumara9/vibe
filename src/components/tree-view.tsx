import { TreeItem } from "@/types";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarProvider,
    SidebarRail
} from "@/components/ui/sidebar";
import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";
import { 
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
 } from "@radix-ui/react-collapsible";

interface TreeViewProps {
    data: TreeItem[];
    value? : string | null;
    onSelect? : (value: string) =>void;
};

export const TreeView = ({
    data,
    value,
    onSelect
}:TreeViewProps) => {
    return (
        <SidebarProvider>
          <Sidebar collapsible="none" className="w-full">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.map((item, index) => (
                      <Tree
                        key={index}
                        item={item}
                        selectedValue={value}
                        onSelect={onSelect}
                        parentPath=""
                      />
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
        </SidebarProvider>
    );
};

interface TreeProps{
    item : TreeItem;
    selectedValue?: string | null;
    onSelect? : (value:string) =>void;
    parentPath: string;
};

const Tree = ({ item, selectedValue, onSelect, parentPath
}:TreeProps) => {
    const [name, ...items] = Array.isArray(item) ? item : [item];
    const currentPath = parentPath ? `${parentPath}/${name}` : name;

    if(!items.length){
        const isSelected = selectedValue === currentPath;

        return(
            <SidebarMenuButton
                isActive={isSelected}
                className="w-full data-[active=true]:bg-transparent"
                onClick={() => onSelect?.(currentPath)}
            >
                <FileIcon className="h-4 w-4 shrink-0" />
                <span className="truncate flex-1 text-left">
                    {name}
                </span>
            </SidebarMenuButton>
        )
    }
    //it is a folder
    return (
      <SidebarMenuItem>
        <Collapsible
          className="w-full group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
          defaultOpen
        >
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="w-full">
              <ChevronRightIcon className="h-4 w-4 shrink-0 transition-transform"/>
              <FolderIcon className="h-4 w-4 shrink-0" />
              <span className="truncate flex-1 text-left">
                 {name}
              </span>
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem , index) => (
                <Tree
                    key={index}
                    item={subItem}
                    selectedValue={selectedValue}
                    onSelect={onSelect}
                    parentPath={currentPath}
                />
            ))}
          </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
};