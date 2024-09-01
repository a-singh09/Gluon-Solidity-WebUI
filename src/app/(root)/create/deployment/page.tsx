import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export const description =
  "A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings."

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Create New Deployment</h1>
          <h3 className="text-pretty text-base ml-1 text-zinc-400">Fill this form to create new Deployment</h3>
        </div>
        <div className="mx-auto w-full max-w-6xl items-start gap-6">
          
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Basic Details</CardTitle>
                <CardDescription>
                  Basic details like name of token, symbol etc.
                </CardDescription>
              </CardHeader>
              <CardContent>               
                  <Input placeholder="Name" className="my-2" />
                  <Input placeholder="Symbol" className="my-2" />               
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Treasury Details</CardTitle>
                <CardDescription>
                  Details related to the treasury configuration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input placeholder="Treasury Address" className="my-2" />
                <Input placeholder="Initial Treasury Fee" className="my-2" />
                <Input placeholder="Treasury Revenue Target" className="my-2" />
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-04-chunk-3">
              <CardHeader>
                <CardTitle>Ratios and Fees</CardTitle>
                <CardDescription>
                  Configuration of critical and target ratios, and fees for fission and fusion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input placeholder="Critical Ratio" className="my-2" />
                <Input placeholder="Target Ratio" className="my-2" />
                <Input placeholder="Fee for Fission" className="my-2" />
                <Input placeholder="Fee for Fusion" className="my-2" />
                <Input placeholder="Decay Rate" className="my-2" />
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-04-chunk-4">
              <CardHeader>
                <CardTitle>Staking Vaults</CardTitle>
                <CardDescription>
                  Addresses for neutron and proton staking vaults.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input placeholder="Neutron Staking Vault Address" className="my-2" />
                <Input placeholder="Proton Staking Vault Address" className="my-2" />
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}