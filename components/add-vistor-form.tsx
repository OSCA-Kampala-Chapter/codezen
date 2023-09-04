import React, { useEffect, useRef, useState } from 'react';
import { Input } from './ui/input';
import { VistedOfficeDropdown } from './visted-office-dropdown';
import { VistingPurposeDropdown } from './visting-purpose-dropdown';
import { Button } from './ui/button';

type FormTypes = {
  onCancel: () => void;
  onSave: (data: any) => void;
};

const AddVistorForm = (props: FormTypes) => {
  const [vistorHasId, setVistorHasId] = useState(false);
  const [otherVistedOffice, setOtherVistedOffice] = useState('');
  const [vistedOffice, setVistedOffice] = useState('');
  const [otherVistingPurpose, setOtherVistingPurpose] = useState('');
  const [vistingPurpose, setVistingPurpose] = useState('');

  let formData = useRef<any>({
    vistorHasId: vistorHasId,
    visitedOffice: '',
    vistingPurpose: '',
    vistorsName: '',
    vistorsContact: '',
  });

  const handleSubmit = () => {
    // props.onSave([]);
    console.log(formData.current);
  };

  // Todo: Form state is cleared acrross re-renders, persist it with ref or local storage

  useEffect(() => {
    if (vistedOffice === 'Other') {
      formData.current = {
        ...formData.current,
        visitedOffice: otherVistedOffice,
      };
    } else {
      formData.current = { ...formData.current, visitedOffice: vistedOffice };
    }
    console.log(formData.current);
  }, [vistedOffice, otherVistedOffice]);

  useEffect(() => {
    if (vistingPurpose === 'Other') {
      formData.current = {
        ...formData.current,
        vistingPurpose: otherVistingPurpose,
      };
    } else {
      formData.current = {
        ...formData.current,
        vistingPurpose: vistingPurpose,
      };
    }
    console.log(formData.current);
  }, [vistingPurpose, otherVistingPurpose]);

  return (
    <section className="w-full flex flex-col justify-start items-start gap-4">
      <div className="flex justify-start items-center w-full gap-4">
        <h2>Vistor has a National ID?</h2>
        <button
          className={`${
            vistorHasId
              ? 'bg-green-500 text-green-50 hover:bg-green-400'
              : 'text-green-500 hover:bg-green-50'
          } ring-1 ring-neutral-200 shadow px-2 py-1 text-center rounded-md `}
          onClick={() => setVistorHasId(true)}>
          Yes, Verify ID
        </button>
        <button
          className={`${
            !vistorHasId
              ? 'bg-red-500 text-red-50 hover:bg-red-400'
              : 'text-red-500 hover:bg-red-50'
          } ring-1 ring-neutral-200 shadow px-2 py-1 text-center rounded-md `}
          onClick={() => setVistorHasId(false)}>
          No
        </button>
      </div>
      {/* The Vistor's Info Form */}
      <form
        name="vistors-info-form"
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex flex-col justify-start items-start gap-4">
        <div className="flex flex-col justify-start items-start w-full gap-4">
          <label
            htmlFor="vistorName"
            className="text-right flex flex-nowrap whitespace-nowrap font-semibold">
            {`Vistor's Name:`}
          </label>
          <Input
            id="vistorName"
            placeholder="eg. John Doe"
            className="flex w-full"
          />
        </div>
        <div className="flex  flex-col justify-start items-start w-full gap-4">
          <label
            htmlFor="vistorContact"
            className="text-right flex flex-nowrap whitespace-nowrap font-semibold">
            {`Vistor's Contact:`}
          </label>
          <Input
            id="vistorContact"
            placeholder="07XXXXXXXXXX"
            className="flex w-full"
          />
        </div>
        <div className="flex  flex-col justify-start items-start w-full gap-4">
          <div className="flex justify-start items-start w-full gap-4">
            <h3 className="text-right flex flex-nowrap whitespace-nowrap font-semibold">
              Visted Office:
            </h3>
            <VistedOfficeDropdown
              onSelect={(value) => setVistedOffice(value)}
            />
          </div>
          <div
            className={`flex-col justify-start items-start w-full gap-2 ${
              vistedOffice === 'Other' ? 'flex' : 'hidden'
            }`}>
            <p className="text-right flex flex-nowrap whitespace-nowrap font-semibold text-neutral-700 text-sm">
              Fill below if not listed in options above!
            </p>
            <Input
              id="otherVistedOffice"
              className="flex w-full"
              value={otherVistedOffice}
              onChange={(e) => setOtherVistedOffice(e.target.value)}
            />
          </div>
        </div>
        <div className="flex  flex-col justify-start items-start w-full gap-4">
          <div className="flex justify-start items-start w-full gap-4">
            <h3 className="text-right flex flex-nowrap whitespace-nowrap font-semibold">
              Visting Purpose:
            </h3>
            <VistingPurposeDropdown
              onSelect={(value) => setVistingPurpose(value)}
            />
          </div>
          <div
            className={`flex-col justify-start items-start w-full gap-2 ${
              vistingPurpose === 'Other' ? 'flex' : 'hidden'
            }`}>
            <p className="text-right flex flex-nowrap whitespace-nowrap font-semibold text-neutral-700 text-sm">
              Fill below if not listed in options above!
            </p>
            <Input
              id="otherVistedOffice"
              className="flex w-full"
              value={otherVistingPurpose}
              onChange={(e) => setOtherVistingPurpose(e.target.value)}
            />
          </div>
        </div>
        {/* The Action Buttons */}
        <div className="flex justify-start items-start w-full gap-6 mt-8">
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
          <Button
            variant="outline"
            className="text-red-500 ring-1 hover:text-red-400 ring-red-300 bg-red-100"
            onClick={props.onCancel}>
            cancel
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddVistorForm;
