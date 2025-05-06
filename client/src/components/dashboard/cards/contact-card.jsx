import { MessageSquare, ChevronDown } from 'lucide-react';
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
            <div className="flex flex-col items-center justify-between w-full h-full rounded-xl p-5 bg-gradient-to-br from-brand-50 to-brand-100">
                <div className="text-center w-full mb-3">
                    <MessageSquare className="h-8 w-8 text-primary mx-auto mb-1" />
                    <h3 className="text-lg font-semibold text-primary">Solicitudes Recientes</h3>
                </div>
                <div className="w-full flex flex-col gap-3 mb-3">
                    {
                        requests.map((request, i) => (
                            <div
                                key={ i }
                                className="flex items-center justify-between bg-background rounded-xl px-4 py-3 shadow-sm text-sm gap-2"
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium">{ request.name }</span>
                                    <span className="text-xs text-muted-foreground">{ request.email }</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="bg-brand-100 text-brand-800 rounded-lg">
                                        { request.modelo }
                                    </Badge>
                                    <span className={ `w-2 h-2 rounded-full ${ getStatusColor(request.status) }` }></span>
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
        className: "md:col-span-2 hover:shadow-lg rounded-2xl transition-all duration-300"
    }
};

export default ContactRequestsCard;