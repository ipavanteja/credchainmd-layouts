import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Profile = () => {
  return (
    <div className="px-4 flex flex-col gap-8 md:px-16 py-5">
      <div className="gap-4 py-2">
        <h3 className=" text-primary text-lg">Personal details</h3>
        <div className="px-3 py-2 mt-2 bg-white rounded-2xl border-2">
          <form className="flex flex-col">
            <div className="grid md:grid-cols-2 py-2 items-center gap-4">
              <Input id="name" placeholder="Name *" defaultValue="Pavan" />
              <Input disabled id="email" placeholder="pavan@i.camp" />
            </div>
            <div className="grid md:grid-cols-2 py-2 items-center gap-4">
              <Input id="specialty" placeholder="Specialty" />
              <Input id="phone" placeholder="Phone Number" />
            </div>
            <div className="grid md:grid-cols-2 py-2 items-center gap-4">
              <Input id="location" placeholder="Location" />
              <Input id="experience" placeholder="Experience" />
            </div>
            <Button className="h-10 px-4 py-2 mt-3 w-full md:w-1/6 self-end bg-[#28328C] hover:bg-[#03045e]">
              Update
            </Button>
          </form>
        </div>
      </div>
      <div className="gap-4 py-2">
        <h3 className=" text-primary text-lg">Degree details</h3>
        <div className="px-3 py-2 mt-2 bg-white rounded-2xl border-2">
          <form className="flex flex-col">
            <div className="grid md:grid-cols-2 py-2 items-center gap-4">
              <Input id="degree" placeholder="Degree Name" />
              <Input id="institution" placeholder="Institution Name" />
            </div>
            <div className="grid md:grid-cols-2 py-2 items-center gap-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Certification Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="type-2">Type 2</SelectItem>
                    <SelectItem value="type 3">Type 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="License" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="MBA">Medical</SelectItem>
                    <SelectItem value="type-2">Type 2</SelectItem>
                    <SelectItem value="type 3">Type 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Label
              className="text-left font-normal text-gray-400 text-sm"
              htmlFor="certificates"
            >
              Certificates
            </Label>
            <div className="grid md:grid-cols-2 py-2 items-center gap-4">
              <Input id="certificates" type="file" />
            </div>
          </form>
        </div>
      </div>
      <div className="gap-4 py-2">
        <h3 className=" text-primary text-lg">Password details</h3>
        <div className="px-3 py-2 mt-2 bg-white rounded-2xl border-2">
          <p className="pt-2 pb-3">
            In Case you want to change your password you can do it here
          </p>
          <Button variant="secondary">Change Password</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
