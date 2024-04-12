import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const Home = () => {
  return (
    <div className="px-4 md:px-16 py-5">
      <div>
        <p className=" text-gray-500 mt-5">Few steps to get started here</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-2 gap-6">
          <div className="border bg-card text-card-foreground shadow-sm rounded-3xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl leading-none tracking-tight font-medium">
                Credential Submission
              </h3>
              <p className="text-sm text-muted-foreground">
                Upload qualifications and certificates
              </p>
            </div>
            <div className="flex items-center p-6 py-5">
              <Button variant="secondary">
                <Upload /> {`  Upload`}
              </Button>
            </div>
          </div>
          <div className="border bg-card text-card-foreground shadow-sm rounded-3xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl leading-none tracking-tight font-medium">
                Submissions Verification
              </h3>
              <p className="text-sm text-muted-foreground">
                Your submission status will appear here
              </p>
            </div>
            <div className="flex items-center p-6 py-5">
              <p>-</p>
            </div>
          </div>
          <div className="border bg-card text-card-foreground shadow-sm rounded-3xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl leading-none tracking-tight font-medium">
                Credential Verification
              </h3>
              <p className="text-sm text-muted-foreground">
                Result for credential will appear here
              </p>
            </div>
            <div className="flex items-center p-6 py-5">
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
