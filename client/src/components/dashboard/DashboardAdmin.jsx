import React, { useState } from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import Button from '../ui/button';
import { Plus, Pencil, Trash2, Eye, Reply } from 'lucide-react';

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
    <>
      <div className="flex flex-col min-h-screen">
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
                        <div key={ i } className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all">
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
                            <Button variant="outline" size="sm" className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium transition-all duration-300 bg-primary text-white rounded-xl hover:scale-105 hover:shadow-lg group">
                              <Pencil className="h-4 w-4 mr-1" /> Editar
                            </Button>
                            <Button variant="destructive" size="sm" className="rounded-lg">
                              <Trash2 className="h-4 w-4 mr-1" /> Eliminar
                            </Button>
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
                        <div key={ i } className="grid grid-cols-5 items-center p-4 text-sm border-t">
                          <div className="font-medium">{ request.name }</div>
                          <div className="text-muted-foreground">{ request.email }</div>
                          <div>
                            <Badge variant="outline" className="bg-brand-100 text-brand-800 rounded-lg">{ request.modelo }</Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={ `w-2 h-2 rounded-full ${ getStatusColor(request.status) }` }></span>
                            <span>{ getStatusText(request.status) }</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="rounded-lg">
                              <Eye className="h-4 w-4 mr-1" /> Ver
                            </Button>
                            <Button variant="outline" size="sm" className="rounded-lg">
                              <Reply className="h-4 w-4 mr-1" /> Responder
                            </Button>
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
    </>
  )
};

export default DashboardAdmin;