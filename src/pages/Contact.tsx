import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations/translations";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import pelleImage from "@/assets/pelle-alsterlind.jpg";
import christianImage from "@/assets/christian-bergqvist.jpg";

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(getTranslation(language, "contact_form_success"));
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-graphite text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-sm font-medium text-taupe tracking-widest uppercase mb-4">
            {getTranslation(language, "contact_page_hero")}
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            {getTranslation(language, "contact_page_title")}
          </h1>
          <p className="text-xl text-offWhite max-w-3xl leading-relaxed">
            {getTranslation(language, "contact_page_subtitle")}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
              {getTranslation(language, "contact_team_title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={pelleImage} alt="Pelle Alsterlind" />
                      <AvatarFallback>PA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {getTranslation(language, "contact_person1_name")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {getTranslation(language, "contact_person1_role")}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-4 h-4 text-accent" />
                          <a href={`tel:${getTranslation(language, "contact_person1_phone")}`} className="hover:text-accent">
                            {getTranslation(language, "contact_person1_phone")}
                          </a>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-4 h-4 text-accent" />
                          <a href={`mailto:${getTranslation(language, "contact_person1_email")}`} className="hover:text-accent">
                            {getTranslation(language, "contact_person1_email")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={christianImage} alt="Christian Bergqvist" />
                      <AvatarFallback>CB</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {getTranslation(language, "contact_person2_name")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {getTranslation(language, "contact_person2_role")}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-4 h-4 text-accent" />
                          <a href={`tel:${getTranslation(language, "contact_person2_phone")}`} className="hover:text-accent">
                            {getTranslation(language, "contact_person2_phone")}
                          </a>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-4 h-4 text-accent" />
                          <a href={`mailto:${getTranslation(language, "contact_person2_email")}`} className="hover:text-accent">
                            {getTranslation(language, "contact_person2_email")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                  {getTranslation(language, "contact_form_title")}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder={getTranslation(language, "contact_form_name")}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={getTranslation(language, "contact_form_email")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder={getTranslation(language, "contact_form_company")}
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder={getTranslation(language, "contact_form_message")}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    {getTranslation(language, "contact_form_submit")}
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                  {getTranslation(language, "contact_info_title")}
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {getTranslation(language, "contact_visit_address")}
                      </h3>
                      <p className="text-muted-foreground">
                        Torggatan 2A<br />
                        447 30 Vårgårda<br />
                        Sweden
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {getTranslation(language, "contact_phone")}
                      </h3>
                      <p className="text-muted-foreground">+46 (0)738 86 33 27</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {getTranslation(language, "contact_email")}
                      </h3>
                      <p className="text-muted-foreground">info@absteelsolutions.se</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-8 rounded-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {getTranslation(language, "contact_hours_title")}
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>{getTranslation(language, "contact_hours_weekday")}</p>
                  <p>{getTranslation(language, "contact_hours_weekend")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
