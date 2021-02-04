//Interface pour utiliser les données de l'API des réservations pour les graphiques
export interface Reservation {
    _id: string,
    dateReservation: Date,
    destination: string,
    nombrePassagers: number,
    prixTotal: number;
}
