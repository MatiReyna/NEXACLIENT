import React, { useState } from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import Button from '../ui/button';
import { Plus, Pencil, Trash2, Eye, Reply } from 'lucide-react';
import { HeroHighlight } from '../ui/hero-highlight';

// Importar componentes modularizados.
import DashboardHeader from '@/components/dashboard/header';
import WelcomeBanner from '@/components/dashboard/welcome-banner';
import ProfileCard from './cards/profile-card';
import BrandsCard from './cards/brands-card';
import TeamCard from './cards/team-card';
import ContactRequestsCard from './cards/contact-card';
import RatingsCard from './cards/ratings-card';
import ModelsManagementCard from './cards/models-management';
import PublishedModelsCard from './cards/published-card';

// Importar datos y utilidades.
import {
  marcas,
  modelos,
  equipoNexa,
  contactRequests,
  ratings,
  getStatusColor,
  getStatusText
} from './data/sample-data';
import { renderStars } from './helpers/helpers';

const DashboardAdmin = () => {

  const [ activeTab, setActiveTab ] = useState('overview');

  // Generar las etiquetas para el BentoGrid.
  const generateBentoItems = () => {
    return [
      ProfileCard({ onEditProfile: () => alert('Editar perfil') }),
      BrandsCard({ brands: marcas }),
      TeamCard({ team: equipoNexa, onViewTeam: () => alert('Ver Equipo') }),
      ContactRequestsCard({ requests: contactRequests, getStatusColor }),
      RatingsCard({ ratings, renderStars, onViewAllRatings: () => alert('Ver todas las valoraciones') }),
      ModelsManagementCard({ onCreateModel: () => alert('Crear Modelo') }),
      PublishedModelsCard({ models: modelos, onViewAllModels: () => alert('Ver todos los modelos') })
    ]
  };

  return (
    <HeroHighlight className="min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col min-h-full relative z-10">
        <DashboardHeader />

        <div className="container py-8">
          <WelcomeBanner />

          <Tabs defaultValue="overview" className="mb-8" onValueChange={ setActiveTab }>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="overview" className="border border-[#241f19]/10 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Resumen</TabsTrigger>
              <TabsTrigger value="models" className="border border-[#241f19]/10 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Modelos</TabsTrigger>
              <TabsTrigger value="contacts" className="border border-[#241f19]/10 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">Contactos</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <BentoGrid className="max-w-6xl mx-auto">
                {
                  generateBentoItems().map((item, i) => (
                    <BentoGridItem
                      key={ i }
                      title={ item.title }
                      description={ item.description }
                      header={ item.header }
                      icon={ item.icon }
                      className={ item.className }
                    />
                  ))
                }
              </BentoGrid>
            </TabsContent>
            <TabsContent value="models" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Gestión de Modelos</CardTitle>
                      <CardDescription>Administra todos los modelos de casas disponibles</CardDescription>
                    </div>
                    <button onClick={ () => setShowCreateModelModal(true) } className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium transition-all duration-300 bg-primary text-white rounded-xl hover:scale-105 hover:shadow-lg group">
                      <Plus className="mr-2 h-4 w-4" />
                      Nuevo Modelo
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                      modelos.map((modelo, i) => (
                        <div key={ i } className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:translate-y-[-2px] transition-transform duration-300">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-10 w-10 rounded-full bg-brand-200 flex items-center justify-center">
                              <Plus className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-bold">{ modelo.nombre }</p>
                              <p className="text-xs text-muted-foreground">Categoría: { modelo.categoria || "General" }</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{ modelo.descripcion }</p>
                          <div className="flex justify-end gap-2 mt-4">
                            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-[#592e83] text-[#592e83] bg-white hover:bg-[#592e83]/10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md group">
                              <Pencil className="h-4 w-4 mr-1" /> Editar
                            </button>
                            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-red-600 text-red-600 bg-white hover:bg-red-50 hover:ring-2 hover:ring-red-200 rounded-xl transition-all duration-300 hover:scale-105 group">
                              <Trash2 className="h-4 w-4 mr-1" /> Eliminar
                            </button>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="contacts" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Solicitudes de Contacto</CardTitle>
                  <CardDescription>Gestiona las solicitudes de contacto de clientes potenciales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-xl border">
                    <div className="grid grid-cols-5 bg-muted/50 p-4 text-sm font-medium">
                      <div>Cliente</div>
                      <div>Email</div>
                      <div>Modelo</div>
                      <div>Estado</div>
                      <div>Acciones</div>
                    </div>
                    {
                      [ ...contactRequests, ...contactRequests ].map((request, i) => (
                        <div key={ i } className="grid grid-cols-5 items-center p-4 text-sm border-t odd:bg-white even:bg-muted/50">
                          <div className="font-medium">{ request.name }</div>
                          <div className="text-muted-foreground">{ request.email }</div>
                          <div>
                            <Badge variant="outline" className="bg-[#f2ebfc] text-[#592e83] border-[#e3d7f6] rounded-lg">{ request.modelo }</Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={ `w-2 h-2 rounded-full ${ getStatusColor(request.status) }` }></span>
                            <span>{ getStatusText(request.status) }</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-[#592e83] text-[#592e83] bg-white hover:bg-[#592e83]/10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md group">
                              <Eye className="h-4 w-4 mr-1" /> Ver
                            </button>
                            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-[#592e83] text-[#592e83] bg-white hover:bg-[#592e83]/10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md group">
                              <Reply className="h-4 w-4 mr-1" /> Responder
                            </button>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </HeroHighlight>
  )
};

export default DashboardAdmin;