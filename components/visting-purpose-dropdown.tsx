'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

type Props = {
  onSelect: (value: string) => void;
};

export function VistingPurposeDropdown(props: Props) {
  const [selectedAgenda, setSelectedAgenda] = useState('Official');

  useEffect(() => {
    props.onSelect(selectedAgenda);
  }, [selectedAgenda, props]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex gap-2 items-center justify-center">
          <span>{selectedAgenda}</span>
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Visiting Purpose</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedAgenda}
          onValueChange={setSelectedAgenda}>
          <DropdownMenuRadioItem value="Official">
            Official
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Deliveries">
            Deliveries
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Training">
            Training
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Other">Other</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
