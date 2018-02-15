module.exports= {
    calculateAge: function(birthDate) {
        birthDate = birthDate.split('/');
        var normalizedDate = new Date(birthDate[2], birthDate[0], birthDate[1], '00', '00', '00');

        var a = Date.now() - normalizedDate.getTime();
        var b = new Date(a);

        return Math.abs(b.getUTCFullYear() - 1970);
    }
};