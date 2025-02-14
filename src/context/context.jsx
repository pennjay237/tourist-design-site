import { createContext } from "react";
import propTypes from "prop-types";

export const CardContext = createContext()

export const CardData = ({children}) => {
    const cards = [
        {
            id: 1,
            title: 'Akagera National Park',
            description: 'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
            image: 'https://s3-alpha-sig.figma.com/img/6521/b928/1e965b9e2b4c3f113bb67ce649d7a461?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BFnMzB1fVjO4hybK0MliJ2kLAbEZ1FO8vXk3j0ha3-IuY~CqXZ98hScMGL3OVoG784pno1jbHteJjmZ0rFrzzIbyELeibS9oDiTaHRn2UuNF4GULyo1eeZonkDOg2LD96MWofpaZWfq2XvhEgFcPZGfb2aab86um39s5vPPoz2A6oDTVRumX16InVxmusYi1fnFrZWLoUbMW6o0w09rUchsaNlUsczHRk-jz6DYh7DbyE3qaYdiJYOAVILIMaZtWNYSnksaE4Bvmbd5qUowBTKEK1zWfAro7x0gpp5Yd9HiMh-YRvxPWWhP5WS3uQMYC527uwp9SAee~14IIHgAtww__'
        },
        {
            id: 2,
            title: 'Bisoke Hike',
            description: 'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
            image: 'https://s3-alpha-sig.figma.com/img/5d06/b58d/ba0e694cee79ef5384b5687366cc3ed3?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NZSAUblWlqDFD7UbK8tfNII-7~mjV9rf-sYz9lt51xT0wHLvJgkFPKbXgXVgKB4-OBuSPTtqipaHYvIa3h9Pkk0WmKRVwGXHSJzCtMxwrEX4-JXM959uOaFRE54RTsfdY3WodoJi5WwFruI1C~i7FevlcR8Lp5zsCW4W-5Bzf9i33vHd9xh9vhc7XXVUbmkl80x8JcsV5GQFCQ4BVbo1JaeSNBImXkJ1lDZNTaYmtI~bcOfLdbX0P0O07~WAhLDocLeRf1psp8InzloqZ~4NhW-vlfoLZUuMghgTUFEB1xPg6g4XpsSbjKXKWGcyvekY8yB9MKHCuAC0thY-DuXqSA__'
        },
        {
            id: 3,
            title: 'Lake Kivu trip',
            description: 'A trip to Lake Kivu can be a truly unique and memorable experience. ',
            image: 'https://s3-alpha-sig.figma.com/img/2509/3e3b/45eb67d244449dc32bcd471b5af02dde?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QNr1syVxceKilfjOH~-wOPWc3nExY4M9-LzwCDL8gb4NnKDxE6-fdRpJwJ4H1peWbf2qCrHo-NHQAci8uyu3iYdpzxzgHqoY2cOzIhmBWu~7NpygTqtvJqAOKlpIb4xuB9FI~sAdF~ZwcrINOMHFVj7nFTz31OroDrd~lyjwsnrAwIK3DPKYPaEIe5mRtkQ71SWU7DYAYNj1Ed-FxQXT7Cks2lh4zlHt76wCgr2OMs3e9FYOvLd61LN-rjhi4WYG8uvVXS7XKqqRZuMG96nXCiQBsLPhRwUPf4xX-roODrCxkrF-6AllcGM~w5DcjT~mXb363Aaa2IO~JyS-Yu7TRg__'
        }
    ]

     const destinations = [
        {
            name: "Kigali",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
            image: "https://s3-alpha-sig.figma.com/img/a863/7b3c/2e3b6a00b8bbcfe1105f7916ee6a392e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ubYhSfaus1mmzjAOxWxWiRbgUDFyOSpt2fltcwJ~QOCs-MV8zUYf0SLrn5zTdwiZLzArVhOnFNqu7tF~iJU-bzP3X2CVrgU2grRTT8mtoCU5hNq7pqw95KelowfAPsNyDKziCEahgowmqvHiRuywPe5bndbp85lkxWRBq1K-lUjlFr05LAfD2ptrx0OuqVcGCweaA6CHuxowMDXLIoIcvt1wnw16G6nEfrd8BcV6x2vhsKkRQD~sAMv30Ef8j6prLgyjOMS5zib6GwQLFp~r48wpLcbhUYkdTGC5g7I~vgwNHiW8Y3RG-PS~9eUJCYr1~JO1IQIUpJpMyj5g29biew__"
        },
        {
            name: "Huye",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
            image: "https://s3-alpha-sig.figma.com/img/80dd/5d9d/fbecb6b4f26bc944de8a49c1f1fe7022?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sorF~HVgsuDXbplrRxoFKfITWicWblZhNIrZ4hEoiRmgfsZS4CCT8G0-GEYtqD6q4wHfpSRimOLvV~ReJrlVMnXQSPDB2nwiZR9fbo4M3cY6YZY0X1oXgLLnhhaXjStFRKqWeVyy6dig-ZsOers8eMGXSAGfuMcVgvc4MTt4KXCxP5bQecmv~LdeTObEarRkGSsFWafV3850OKfp-XRggd-QYl8H0co5oWlmJRHxF-tRbs09QdYapz8IuCCQJSvINO058zg3B9-ErM6EJpZy~4imenciMHxAacwdni5dGx5emBp4guuXcOplwu~KK8QzIckZnvStyoG3RTJY3LhgJQ__"
        },
        {
            name: "Rubavu",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
            image: "https://s3-alpha-sig.figma.com/img/8617/a5ae/25ee4aa2ad522926670eec6990d4dfd8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VAcFBYS2CIgLgzisV5QCCpIgaaWSVkOCdjvEX2lSstrI4qxg0yE1xkl5lgvj18Fc32VPw-S7oXdWM4ibSJ8GIsh-qPX9rqviFMb-JLVwj0YQdloJH3pkEXiuX4QrMxcDjbta~zyOi16RqYZqK1JiukzbwGAYY~y26wDsionJSR~gnbHDD4wR2krxWd5BAVvFzLhNOtXV7CGUDja7syugH9m7L0MlYx8Dim-H0fczzivQ3HdW966CJpHCxQGMigKUEgCq1pAAfWbQLnNh3nj2sv3vsH7huYLMeqSWfoCXSUx8YnU7ZtV4unOHh4-tpLYH2O-GZZEJUxyGVCgGCWxqIg__"
        },
        {
            name: "Musanze",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
            image: "https://s3-alpha-sig.figma.com/img/fea2/604b/aee50bbe92ffcd58172c7b9db8afdd94?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C~BDLmJm2POtW-k4FMkJgjIisFAiohhUJZn6nmEAuAGbAfx~sS6PhtrIHM3Nhyjc1Ufg7Ryis9mT~tZCXMR9tZp9mxrHLPBKejqiNNlNZjJ-uU9eAecMINO9It37OlzmXsBlTp~6R4YV4WJktb3B0eWkV45RoivBPbu6zADAziTL0mS2Iu-RBDcngChtDl-ebPjaq2~Juic1SM9PT0Q0WM7Djf9zkWQ~Sl0kqwsGNC9LH6Amc05STQKmbYd9s-8XwkSH5qN8eCYObzfrO0kWrnavLzAM~mzFPIFHmSmMjEVnDFauNLNHYlFJsor5-Ul~B8Qb8r2Y3CHB23sg8FezDA__"
        }
    ];

    return (
        <CardContext.Provider value= {{cards, destinations}}>
            {children}
        </CardContext.Provider>
    )
}

CardData.propTypes = {
    children: propTypes.node.isRequired
}