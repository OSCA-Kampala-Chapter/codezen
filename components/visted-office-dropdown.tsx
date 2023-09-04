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

export function VistedOfficeDropdown(props: Props) {
  const [selectedOffice, setSelectedOffice] = useState('Head Office');

  useEffect(() => {
    props.onSelect(selectedOffice);
  }, [selectedOffice, props]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex gap-2 items-center justify-center">
          <span>{selectedOffice}</span>
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select An Office</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedOffice}
          onValueChange={setSelectedOffice}>
          <DropdownMenuRadioItem value="Head Office">
            Head Office
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Sky Office">
            Sky Office
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Bank Office">
            Bank Office
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Other">Other</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
