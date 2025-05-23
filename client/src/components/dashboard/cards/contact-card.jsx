import { MessageSquare, ChevronDown, User, Mail, Home, CheckCircle } from 'lucide-react';
import { Badge } from '../../ui/badge';
import Button from '../../ui/button';

const ContactRequestsCard = ({ requests, getStatusColor }) => {
    return {
        title: (
            <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary">Solicitudes de contacto</h3>
            </div>
        ),
        description: (
            <p className="text-sm text-muted-foreground">Gestiona fácilmente las solicitudes de contacto recibidas por modelos de casas.</p>
        ),
        header: (
            <div className="flex flex-col items-center justify-between w-full h-full rounded-xl p-5">
                <div className="text-center w-full mb-3">
                    <MessageSquare className="h-8 w-8 text-primary mx-auto mb-1" />
                    <h3 className="text-lg font-semibold text-primary">Solicitudes Recientes</h3>  
                    <div className="text-xs text-muted-foreground text-center font-medium mb-2">
                      Total: { requests.length } | Pendientes: 2 | Nuevas: 1 | Cerradas: 1
                    </div>
                    <div className="mx-auto h-1 w-24 bg-primary rounded-full mt-4 mb-2"></div>
                </div>
                <div className="w-full flex flex-col gap-3 mb-3">
                    {
                        requests.map((request, i) => (
                            <div
                                key={ i }
                                className="grid grid-cols-4 items-center bg-white border border-muted rounded-xl px-4 py-3 shadow-sm text-sm gap-2 hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4 text-muted-foreground" />
                                  <span className="font-medium truncate">{ request.name }</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Mail className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground truncate">{ request.email }</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Home className="h-4 w-4 text-muted-foreground" />
                                  <Badge variant="outline" className="bg-brand-100 text-brand-800 rounded-lg w-fit">{ request.modelo }</Badge>
                                </div>
                                <div className="flex items-center gap-1">
                                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                                  <span className={ `w-2 h-2 rounded-full ${ getStatusColor(request.status) }` }></span>
                                  <span className="text-xs text-muted-foreground capitalize">{ request.status }</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Button variant="ghost" size="sm" className="self-center">
                    Ver todas <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
            </div>
        ),
        className: "md:col-span-2 hover:shadow-lg rounded-2xl transition-all duration-300 bg-gradient-to-br from-[#fdfbff] via-[#f2ebfc] to-white"
    }
};

export default ContactRequestsCard;