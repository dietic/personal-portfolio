import LandingSection from '@/components/custom/landingSection.component'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactMe() {
  return (
    <LandingSection>
      <h1 className="font-medium text-4xl text-title">
        Let&apos;s <span className="text-primary">Talk</span>
      </h1>
      <p>
        Ready to bring your next project to life? I&apos;d love to hear from
        you!
      </p>
      <div className="flex flex-col gap-4">
        <Card className="p-4 mt-4 bg-linear-to-r from-primary/10 to-secondary/10">
          <div className="flex gap-3 items-center">
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
            <span className="text-title">Currently available</span>
          </div>
          <p className="py-2 text-foreground">
            I&apos;m actively looking for new opportunities and exciting
            projects. Let&apos;s discuss how we can work together
          </p>
        </Card>
        <div className="flex flex-col gap-2">
          <Card className=" flex items-center">
            <CardContent className="flex items-center w-full py-4 gap-4">
              <div className="p-2 bg-primary/20 rounded-full text-primary">
                <Mail height="20" width="20" />
              </div>
              <div>
                <p className="text-title">Email</p>
                <p className="text-primary text-left">dierios93@gmail.com</p>
              </div>
            </CardContent>
          </Card>
          <Card className="flex items-center">
            <CardContent className="flex items-center w-full py-4 gap-4">
              <div className="p-2 bg-secondary/20 rounded-full text-secondary">
                <Phone height="20" width="20" />
              </div>
              <div>
                <p className="text-title">Phone</p>
                <p className="text-secondary text-left">+51 990 345 890</p>
              </div>
            </CardContent>
          </Card>
          <Card className=" flex items-center">
            <CardContent className="flex items-center w-full py-4 gap-4">
              <div className="p-2 bg-primary/20 rounded-full text-primary">
                <MapPin height="20" width="20" />
              </div>
              <div>
                <p className="text-title">Location</p>
                <p className="text-primary text-left">Perú</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LandingSection>
  )
}
