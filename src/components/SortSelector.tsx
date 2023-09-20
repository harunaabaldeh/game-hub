import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        { value: '', lable: 'Relevance' },
        { value: '-added', lable: 'Date added' },
        { value: 'name', lable: 'Name' },
        { value: '-released', lable: 'Released date' },
        { value: '-metacritic', lable: 'Popularity' },
        { value: '-rating', lable: 'Average rating' },
    ]

    const currentSort = sortOrders.find(order => order.value === sortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSort?.lable || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) =>
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.lable}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    );
}

export default SortSelector